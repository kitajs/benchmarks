<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.2`
* __Run:__ Mon Aug 10 2026 01:38:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 78720.0    | 12.21        | 14.04         |
| polka                    | 0.5.2    | ✓      | 77577.6    | 12.39        | 13.83         |
| connect                  | 3.7.0    | ✗      | 76648.0    | 12.55        | 13.67         |
| restana                  | 4.9.9    | ✓      | 75772.8    | 12.69        | 13.51         |
| server-base-router       | 7.1.32   | ✓      | 75681.6    | 12.71        | 13.50         |
| fastify                  | 4.29.1   | ✓      | 75313.6    | 12.78        | 13.50         |
| server-base              | 7.1.32   | ✗      | 75244.8    | 12.79        | 13.42         |
| kita                     | 1.1.36   | ✓      | 74059.2    | 13.01        | 13.28         |
| rayo                     | 1.4.6    | ✓      | 73169.6    | 13.17        | 13.05         |
| connect-router           | 1.3.8    | ✓      | 69985.6    | 13.80        | 12.48         |
| hono                     | 4.13.1   | ✓      | 67415.2    | 14.33        | 11.06         |
| 0http                    | 3.5.3    | ✓      | 66086.0    | 14.64        | 11.79         |
| polkadot                 | 1.0.0    | ✗      | 65933.6    | 14.67        | 11.76         |
| koa                      | 2.16.4   | ✗      | 60840.0    | 15.94        | 10.85         |
| h3                       | 1.15.11  | ✗      | 57923.2    | 16.77        | 10.33         |
| take-five                | 2.0.0    | ✓      | 57568.8    | 16.87        | 20.70         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 57499.2    | 16.89        | 10.25         |
| h3-router                | 1.15.11  | ✓      | 55946.4    | 17.38        | 9.98          |
| restify                  | 11.1.0   | ✓      | 55128.0    | 17.64        | 9.94          |
| koa-router               | 12.0.1   | ✓      | 55044.8    | 17.66        | 9.82          |
| hapi                     | 21.4.10  | ✓      | 48710.4    | 20.02        | 8.69          |
| express                  | 4.22.2   | ✓      | 16579.4    | 59.78        | 2.96          |
| express-with-middlewares | 4.22.2   | ✓      | 15626.8    | 63.46        | 5.81          |
| fastify-big-json         | 4.29.1   | ✓      | 12777.2    | 77.71        | 147.01        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
