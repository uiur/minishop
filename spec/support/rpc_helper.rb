module RpcHelper
  def conn
    Faraday.new(url: 'http://example.com/twirp') do |conn|
      conn.adapter :rack, app
    end
  end
end
